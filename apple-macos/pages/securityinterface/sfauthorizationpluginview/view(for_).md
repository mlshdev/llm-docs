> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/view(for:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/view(for:))

# view(for:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the appropriate view object for the specified view type.

## Declaration

```swift
func view(for inType: SFViewType) -> NSView!
```

## Parameters

- `inType`: The type of view being requested by the authorization plug-in.

<a id="return-value"></a>

## Return Value

An [NSView](../../appkit/nsview.md) object representing either a credentials view or an identity and credentials view.

<a id="Discussion"></a>

## Discussion

When the authorization plug-in calls this method, the [SFAuthorizationPluginView](../sfauthorizationpluginview.md) instance should return the [NSView](../../appkit/nsview.md) object that represents the view indicated by the specified [SFViewType](../sfviewtype.md). The [NSView](../../appkit/nsview.md) object and its contents should have the autoresize flags set to allow the view to be resized.

Note that although a maximum width of 394 points is currently supported, this may change in the future. You should not assume that the width of the [NSView](../../appkit/nsview.md) object will never change.

## See Also

### Responding to User Actions

- [buttonPressed(\_:)](buttonpressed%28__%29.md): Tells the authorization plug-in that the user pressed a button in the custom view.

# viewForType: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the appropriate view object for the specified view type.

## Declaration

```objectivec
- (NSView *) viewForType:(SFViewType) inType;
```

## Parameters

- `inType`: The type of view being requested by the authorization plug-in.

<a id="return-value"></a>

## Return Value

An [NSView](../../appkit/nsview.md) object representing either a credentials view or an identity and credentials view.

<a id="Discussion"></a>

## Discussion

When the authorization plug-in calls this method, the [SFAuthorizationPluginView](../sfauthorizationpluginview.md) instance should return the [NSView](../../appkit/nsview.md) object that represents the view indicated by the specified [SFViewType](../sfviewtype.md). The [NSView](../../appkit/nsview.md) object and its contents should have the autoresize flags set to allow the view to be resized.

Note that although a maximum width of 394 points is currently supported, this may change in the future. You should not assume that the width of the [NSView](../../appkit/nsview.md) object will never change.

## See Also

### Responding to User Actions

- [buttonPressed:](buttonpressed%28__%29.md): Tells the authorization plug-in that the user pressed a button in the custom view.
