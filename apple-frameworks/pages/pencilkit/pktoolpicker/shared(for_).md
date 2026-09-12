> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/shared(for:)](https://developer.apple.com/documentation/pencilkit/pktoolpicker/shared(for:))

# shared(for:) (Swift)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the tool picker object to use for the specified window.

> Create individual instances of the tool picker using [init()](init%28%29.md) or [init(toolItems:)](init%28toolitems_%29.md) instead.

## Declaration

```swift
class func shared(for window: UIWindow) -> PKToolPicker?
```

## Parameters

- `window`: A window of your app.

<a id="return-value"></a>

## Return Value

The tool picker associated with the window, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method when you want to retrieve the tool picker assigned to one of your app’s windows. If the specified window doesn’t yet have a tool picker, this method creates and associates it with that window.

## See Also

### Deprecated

- [selectedTool](selectedtool-2lptq.md): Deprecated. The currently selected tool in the tool picker.

# sharedToolPickerForWindow: (Objective-C)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the tool picker object to use for the specified window.

> Create individual instances of the tool picker using [init](init%28%29.md) or [initWithToolItems:](init%28toolitems_%29.md) instead.

## Declaration

```objectivec
+ (PKToolPicker *) sharedToolPickerForWindow:(UIWindow *) window;
```

## Parameters

- `window`: A window of your app.

<a id="return-value"></a>

## Return Value

The tool picker associated with the window, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method when you want to retrieve the tool picker assigned to one of your app’s windows. If the specified window doesn’t yet have a tool picker, this method creates and associates it with that window.

## See Also

### Deprecated

- [selectedTool](selectedtool-93ikc.md): Deprecated. The currently selected tool in the tool picker.
