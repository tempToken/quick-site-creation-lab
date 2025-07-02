
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { X, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Eduvance</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Helping You Find the Perfect Home, Every Step of the Way
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <X className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Menu</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Courses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4">Stay in the loop!</h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for course updates, expert tips, and special offers.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-10 text-sm"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 h-10">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>2025 Eduvance. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
