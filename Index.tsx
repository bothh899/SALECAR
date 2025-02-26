import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ArrowDown, ArrowRight } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <nav className="container flex h-14 items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            AUTOLUX
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary">My Bookings</a>
            <Select defaultValue="en">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
            <a href="#" className="text-sm font-medium hover:text-primary">Sign In</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Support</a>
          </div>
        </nav>
      </header>

      <main className="container py-8">
        <section className="space-y-6">
          <Card className="p-4">
            <div className="flex flex-wrap gap-4">
              <Label className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-md">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Pick-up: Wed, Feb 07, 11:00 AM @ Munich Airport
              </Label>
              <Label className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-md">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Drop-off: Wed, Feb 14, 10:00 AM @ Hamburg-Eppendorf
              </Label>
            </div>
          </Card>

          <div>
            <h2 className="text-2xl font-bold mb-6">Choose your vehicle</h2>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
              {/* Filters */}
              <Card className="h-fit sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase">Price Range</h4>
                      <div className="space-y-2">
                        {['$55 - $109', '$109 - $164', '$164 - $218', '$218+'].map((range) => (
                          <button
                            key={range}
                            className="w-full text-left px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                            onClick={() => console.log(`Selected price range: ${range}`)}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase">Vehicle Category</h4>
                      <div className="space-y-2">
                        {['SUV', 'Coupe', 'Limousine', 'Cabriolet', 'Family Car', 'Electric Vehicle'].map((category) => (
                          <button
                            key={category}
                            className="w-full text-left px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                            onClick={() => console.log(`Selected category: ${category}`)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vehicle List */}
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
                  <span className="text-sm text-muted-foreground">
                    Showing <strong className="text-foreground">32</strong> vehicles
                  </span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular First</SelectItem>
                      <SelectItem value="price-low">Price Low to High</SelectItem>
                      <SelectItem value="price-high">Price High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* Vehicle Cards */}
                  {[
                    {
                      name: "BMW M440 Coupe",
                      type: "Coupe",
                      pricePerDay: 174.39,
                      totalPrice: 1556.35,
                      image: "https://i.pinimg.com/474x/84/45/be/8445be42a76e0641a603608a280d2a95.jpg",
                      features: ["900 km included", "Automatic", "Premium", "374 HP"],
                      badge: "Popular",
                      promo: "Advice of the Day"
                    },
                    {
                      name: "VW T-Roc",
                      type: "Crossover",
                      pricePerDay: 63.99,
                      totalPrice: 776.42,
                      image: "https://i.pinimg.com/474x/42/3e/99/423e998884b603c3889822e8be6c8832.jpg",
                      features: ["900 km included", "Stick Shift", "Fuel Efficient", "458L Trunk"],
                      promo: "Limited Time Offer"
                    },
                    {
                      name: "BMW X3 30",
                      type: "SUV",
                      pricePerDay: 77.19,
                      totalPrice: 1092.51,
                      image: "https://i.pinimg.com/474x/87/0a/7c/870a7cd7fff5150dd958b3c6b1f68166.jpg",
                      features: ["1,200 km included", "Automatic", "Hybrid", "550L Trunk"],
                      badge: "Eco-friendly",
                      promo: "Early Bird Special"
                    }
                  ].map((vehicle, index) => (
                    <Card key={index} className="group relative overflow-hidden transition-all hover:-translate-y-1">
                      {vehicle.promo && (
                        <span className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {vehicle.promo}
                        </span>
                      )}
                      <span className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-md text-xs">
                        {vehicle.type}
                      </span>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{vehicle.name}</h3>
                          {vehicle.badge && (
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {vehicle.badge}
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <div className="text-xl font-bold text-primary">${vehicle.pricePerDay}/day</div>
                          <div className="text-sm text-muted-foreground">Total: ${vehicle.totalPrice}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {vehicle.features.map((feature, i) => (
                            <span key={i} className="text-sm text-muted-foreground flex items-center gap-1">
                              <ArrowRight className="h-4 w-4" />
                              {feature}
                            </span>
                          ))}
                        </div>
                        <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors">
                          Select Vehicle
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};