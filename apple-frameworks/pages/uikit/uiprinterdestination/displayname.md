> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterdestination/displayname](https://developer.apple.com/documentation/uikit/uiprinterdestination/displayname)

# displayName (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A human-readable string that displays the name of a printer.

## Declaration

```swift
var displayName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains a name that describes the printer’s manufacturer and model number to display in the app’s user interface. If `nil`, the [txtRecord](txtrecord.md) property can produce the display name.

## See Also

### Describing the printer

- [txtRecord](txtrecord.md): A DNS TXT record to identify the printer.
- [url](url.md): The address of the printer.

# displayName (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A human-readable string that displays the name of a printer.

## Declaration

```objectivec
@property (copy, readwrite, nullable) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

This property contains a name that describes the printer’s manufacturer and model number to display in the app’s user interface. If `nil`, the [txtRecord](txtrecord.md) property can produce the display name.

## See Also

### Describing the printer

- [txtRecord](txtrecord.md): A DNS TXT record to identify the printer.
- [URL](url.md): The address of the printer.
