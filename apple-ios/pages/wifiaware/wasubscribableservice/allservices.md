> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscribableservice/allservices](https://developer.apple.com/documentation/wifiaware/wasubscribableservice/allservices)

# allServices

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A dictionary of all subscribable services declared by your app, indexed by service name.

## Declaration

```swift
static var allServices: [WASubscribableService.ID : WASubscribableService] { get }
```

## Mentioned In

- [Adopting Wi-Fi Aware](../adopting-wi-fi-aware.md)

<a id="discussion"></a>

## Discussion

The system populates the contents of this property from the values under the `Info.plist` key `WiFiAwareServices`,  with all entries that specify the `Subscribable` configuration included.

You can select a service from this property using the `serviceName` as the key to pull elements from the dictionary, or by using an extension as follows:

```swift
// Index into the dictionary.
let myService = WASubscribableService.allServices["_example-service._tcp"]!

// Give the service a symbol name.
extension WASubscribableService {
	public static var exampleService : WASubscribableService {
		allServices["_example-service._tcp"]!
	}
}
let myService = .exampleService
```
