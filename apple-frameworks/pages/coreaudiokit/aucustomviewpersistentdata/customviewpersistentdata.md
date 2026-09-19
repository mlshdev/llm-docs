> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudiokit/aucustomviewpersistentdata/customviewpersistentdata

# customViewPersistentData (Swift)

**Framework:** CoreAudioKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Called by the host application to obtain view state data from a custom Cocoa view.

## Declaration

```swift
unowned(unsafe) var customViewPersistentData: NSDictionary? { get set }
```

<a id="return-value"></a>

## Return Value

A dictionary containing view state data.

<a id="Discussion"></a>

## Discussion

The host application should call this method before closing the view.

# customViewPersistentData (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Called by the host application to obtain view state data from a custom Cocoa view.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) NSDictionary<NSString *,id> * customViewPersistentData;
```

<a id="return-value"></a>

## Return Value

A dictionary containing view state data.

<a id="Discussion"></a>

## Discussion

The host application should call this method before closing the view.
