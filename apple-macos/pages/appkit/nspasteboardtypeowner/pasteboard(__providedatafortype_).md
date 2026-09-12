> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardtypeowner/pasteboard(_:providedatafortype:)](https://developer.apple.com/documentation/appkit/nspasteboardtypeowner/pasteboard(_:providedatafortype:))

# pasteboard(\_:provideDataForType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests that the object provide data for the data type to the pasteboard.

## Declaration

```swift
func pasteboard(_ sender: NSPasteboard, provideDataForType type: NSPasteboard.PasteboardType)
```

## Parameters

- `sender`: The pasteboard requesting data.
- `type`: The data type.

# pasteboard:provideDataForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests that the object provide data for the data type to the pasteboard.

## Declaration

```objectivec
- (void) pasteboard:(NSPasteboard *) sender provideDataForType:(NSPasteboardType) type;
```

## Parameters

- `sender`: The pasteboard requesting data.
- `type`: The data type.
