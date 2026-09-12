> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/filelabelcolors](https://developer.apple.com/documentation/appkit/nsworkspace/filelabelcolors)

# fileLabelColors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The array of colors for the file labels.

## Declaration

```swift
var fileLabelColors: [NSColor] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSColor` objects.

<a id="Discussion"></a>

## Discussion

This array has the same number of elements as [fileLabels](filelabels.md), and the color at a given index corresponds to the label at the same index.

You can listen for notifications named [didChangeFileLabelsNotification](didchangefilelabelsnotification.md) to be notified when file labels change that may result in changes to the order of the `fileLabelColors`.

You can safely call this method from any thread of your app.

## See Also

### Finder File Labels

- [fileLabels](filelabels.md): The array of file labels, returned as strings.

# fileLabelColors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The array of colors for the file labels.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSColor *> * fileLabelColors;
```

<a id="return-value"></a>

## Return Value

An array of `NSColor` objects.

<a id="Discussion"></a>

## Discussion

This array has the same number of elements as [fileLabels](filelabels.md), and the color at a given index corresponds to the label at the same index.

You can listen for notifications named [NSWorkspaceDidChangeFileLabelsNotification](didchangefilelabelsnotification.md) to be notified when file labels change that may result in changes to the order of the `fileLabelColors`.

You can safely call this method from any thread of your app.

## See Also

### Finder File Labels

- [fileLabels](filelabels.md): The array of file labels, returned as strings.
