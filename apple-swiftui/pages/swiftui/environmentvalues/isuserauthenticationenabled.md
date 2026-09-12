> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/isuserauthenticationenabled](https://developer.apple.com/documentation/swiftui/environmentvalues/isuserauthenticationenabled)

# isUserAuthenticationEnabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current system user authentication enablement status.

## Declaration

```swift
var isUserAuthenticationEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

Use this value to determine whether the system will issue additional device-owner authentication challenges before revealing this piece of user interface from under a system-installed shield.

Your app can respond to changes in this value to take appropriate action, like installing or uninstalling a bespoke UI shield for sensitive content.
