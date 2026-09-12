> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/filelabels](https://developer.apple.com/documentation/appkit/nsworkspace/filelabels)

# fileLabels (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The array of file labels, returned as strings.

## Declaration

```swift
var fileLabels: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of strings.

<a id="Discussion"></a>

## Discussion

You can listen for notifications named [didChangeFileLabelsNotification](didchangefilelabelsnotification.md) to be notified when file labels change.

You can safely call this method from any thread of your app.

## See Also

### Finder File Labels

- [fileLabelColors](filelabelcolors.md): The array of colors for the file labels.

# fileLabels (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The array of file labels, returned as strings.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * fileLabels;
```

<a id="return-value"></a>

## Return Value

An array of strings.

<a id="Discussion"></a>

## Discussion

You can listen for notifications named [NSWorkspaceDidChangeFileLabelsNotification](didchangefilelabelsnotification.md) to be notified when file labels change.

You can safely call this method from any thread of your app.

## See Also

### Finder File Labels

- [fileLabelColors](filelabelcolors.md): The array of colors for the file labels.
