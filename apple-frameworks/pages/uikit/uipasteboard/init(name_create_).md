> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/init(name:create:)](https://developer.apple.com/documentation/uikit/uipasteboard/init(name:create:))

# init(name:create:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.

## Declaration

```swift
init?(name pasteboardName: UIPasteboard.Name, create: Bool)
```

## Parameters

- `pasteboardName`: A string or string constant that identifies (or should identify) the pasteboard. To create a pasteboard with a `nil` name, specify a `nil` value for this parameter.
- `create`: A Boolean value that specifies whether to create the pasteboard if it doesn’t already exist. Specify [false](https://developer.apple.com/documentation/swift/false) for system pasteboards or if you want to use an existing app pasteboard.

<a id="return-value"></a>

## Return Value

A pasteboard object you can use to transfer data within an app or between apps that have the same team ID.

<a id="Discussion"></a>

## Discussion

Call this method to create custom app pasteboards. (You can also use it to obtain the general pasteboard, but the [general](general.md) class method exists for that purpose.) App pasteboards this method returns aren’t persistent, existing only until the app quits. Starting in iOS 10, persistent, named pasteboards are deprecated. Instead, use a shared container, as described in the overview for the [UIPasteboard](../uipasteboard.md) class.

## See Also

### Getting and removing pasteboards

- [general](general.md): The systemwide general pasteboard, which you use for general copy-paste operations.
- [withUniqueName()](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.
- [remove(withName:)](remove%28withname_%29.md): Invalidates the designated app pasteboard.

# pasteboardWithName:create: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a pasteboard that you identify by name, optionally creating it if it doesn’t exist.

## Declaration

```objectivec
+ (UIPasteboard *) pasteboardWithName:(UIPasteboardName) pasteboardName create:(BOOL) create;
```

## Parameters

- `pasteboardName`: A string or string constant that identifies (or should identify) the pasteboard. To create a pasteboard with a `nil` name, specify a `nil` value for this parameter.
- `create`: A Boolean value that specifies whether to create the pasteboard if it doesn’t already exist. Specify [false](https://developer.apple.com/documentation/swift/false) for system pasteboards or if you want to use an existing app pasteboard.

<a id="return-value"></a>

## Return Value

A pasteboard object you can use to transfer data within an app or between apps that have the same team ID.

<a id="Discussion"></a>

## Discussion

Call this method to create custom app pasteboards. (You can also use it to obtain the general pasteboard, but the [generalPasteboard](general.md) class method exists for that purpose.) App pasteboards this method returns aren’t persistent, existing only until the app quits. Starting in iOS 10, persistent, named pasteboards are deprecated. Instead, use a shared container, as described in the overview for the [UIPasteboard](../uipasteboard.md) class.

## See Also

### Getting and removing pasteboards

- [generalPasteboard](general.md): The systemwide general pasteboard, which you use for general copy-paste operations.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Returns an app pasteboard that you identify by a unique system-generated name.
- [removePasteboardWithName:](remove%28withname_%29.md): Invalidates the designated app pasteboard.
