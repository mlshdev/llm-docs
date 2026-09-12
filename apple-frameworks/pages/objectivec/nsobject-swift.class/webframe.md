> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webframe](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webframe)

# webFrame (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** macOS

Returns the `WebFrame` that contains the plug-in.

## Declaration

```swift
var webFrame: WebFrame! { get }
```

<a id="return-value"></a>

## Return Value

The WebFrame that contains the plug-in.

<a id="Discussion"></a>

## Discussion

Only implemented by containers that are based on the WebKit’s plug-in architecture.

## See Also

### Obtaining information about the container

- [webPlugInContainerSelectionColor](webplugincontainerselectioncolor.md): Returns the plug-in selection color.

# webFrame (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** macOS

Returns the `WebFrame` that contains the plug-in.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebFrame * webFrame;
```

<a id="return-value"></a>

## Return Value

The WebFrame that contains the plug-in.

<a id="Discussion"></a>

## Discussion

Only implemented by containers that are based on the WebKit’s plug-in architecture.

## See Also

### Obtaining information about the container

- [webPlugInContainerSelectionColor](webplugincontainerselectioncolor.md): Returns the plug-in selection color.
