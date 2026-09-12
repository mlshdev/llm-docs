> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uisupportedexternalaccessoryprotocols](https://developer.apple.com/documentation/bundleresources/information-property-list/uisupportedexternalaccessoryprotocols)

# UISupportedExternalAccessoryProtocols

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 3.0+ · iPadOS 3.0+

The protocols that the app uses to communicate with external accessory hardware.

## Details

`UISupportedExternalAccessoryProtocols`

<a id="Discussion"></a>

## Discussion

Add this key to your app’s `Info.plist` file, and set the value to the names of the hardware protocols your app supports. You format protocol names as reverse-DNS strings. For example, the string “`com.apple.myProtocol`” might represent a custom protocol that Apple defines. Manufacturers can define custom protocols for their accessories or work with other manufacturers and organizations to define standard protocols for different accessory types.

## See Also

### External accessories

- [UIApplicationSupportsPrintCommand](uiapplicationsupportsprintcommand.md): A Boolean value that indicates whether the app supports the Command-P keyboard shortcut.
