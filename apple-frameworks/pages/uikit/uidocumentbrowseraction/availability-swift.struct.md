> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowseraction/availability-swift.struct](https://developer.apple.com/documentation/uikit/uidocumentbrowseraction/availability-swift.struct)

# UIDocumentBrowserAction.Availability (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Values that determine where the action can appear in the document browser.

## Declaration

```swift
struct Availability
```

## Topics

### Constants

- [menu](availability-swift.struct/menu.md): An action that appears in the Edit Menu when the user long presses a supported document.
- [navigationBar](availability-swift.struct/navigationbar.md): An action that appears in the navigation bar when the user puts the document browser in Select mode.

### Initializers

- [init(rawValue:)](availability-swift.struct/init%28rawvalue_%29.md): Returns a newly instantiated availability instance.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing activity data

- [identifier](identifier.md): The action’s unique identifier.
- [localizedTitle](localizedtitle.md): The title that appears in the menu or navigation bar.
- [availability](availability-swift.property.md): A value that defines where the action can appear (in the Edit Menu, the navigation bar, or both).

# UIDocumentBrowserActionAvailability (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Values that determine where the action can appear in the document browser.

## Declaration

```objectivec
enum UIDocumentBrowserActionAvailability : NSInteger;
```

## Topics

### Constants

- [UIDocumentBrowserActionAvailabilityMenu](availability-swift.struct/menu.md): An action that appears in the Edit Menu when the user long presses a supported document.
- [UIDocumentBrowserActionAvailabilityNavigationBar](availability-swift.struct/navigationbar.md): An action that appears in the navigation bar when the user puts the document browser in Select mode.

## See Also

### Accessing activity data

- [identifier](identifier.md): The action’s unique identifier.
- [localizedTitle](localizedtitle.md): The title that appears in the menu or navigation bar.
- [availability](availability-swift.property.md): A value that defines where the action can appear (in the Edit Menu, the navigation bar, or both).
