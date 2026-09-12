> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterdestination/txtrecord](https://developer.apple.com/documentation/uikit/uiprinterdestination/txtrecord)

# txtRecord (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A DNS TXT record to identify the printer.

## Declaration

```swift
var txtRecord: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

This property supplies additional information about a printing service as a set of strings that the system can parse into a series of key/value pairs. The TXT record can provide basic access, identity, and capability information about the printing service. The interface can then locate the printer based on categories such as color or duplex printing.

A TXT record isn’t required. When absent, the print system queries the URL and verifies that it can reach the printer before presenting it to the user.

## See Also

### Describing the printer

- [displayName](displayname.md): A human-readable string that displays the name of a printer.
- [url](url.md): The address of the printer.

# txtRecord (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A DNS TXT record to identify the printer.

## Declaration

```objectivec
@property (copy, readwrite, nullable) NSData * txtRecord;
```

<a id="Discussion"></a>

## Discussion

This property supplies additional information about a printing service as a set of strings that the system can parse into a series of key/value pairs. The TXT record can provide basic access, identity, and capability information about the printing service. The interface can then locate the printer based on categories such as color or duplex printing.

A TXT record isn’t required. When absent, the print system queries the URL and verifies that it can reach the printer before presenting it to the user.

## See Also

### Describing the printer

- [displayName](displayname.md): A human-readable string that displays the name of a printer.
- [URL](url.md): The address of the printer.
