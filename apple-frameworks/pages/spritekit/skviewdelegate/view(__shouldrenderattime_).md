> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skviewdelegate/view(_:shouldrenderattime:)](https://developer.apple.com/documentation/spritekit/skviewdelegate/view(_:shouldrenderattime:))

# view(\_:shouldRenderAtTime:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies whether the view should render at the given time.

## Declaration

```swift
optional func view(_ view: SKView, shouldRenderAtTime time: TimeInterval) -> Bool
```

## Parameters

- `view`: The SKView.
- `time`: The target time.

<a id="return-value"></a>

## Return Value

Return `true` to initiate an update and render for the target time. Return `false` to skip the update and render for the target time.

# view:shouldRenderAtTime: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies whether the view should render at the given time.

## Declaration

```objectivec
- (BOOL) view:(SKView *) view shouldRenderAtTime:(NSTimeInterval) time;
```

## Parameters

- `view`: The SKView.
- `time`: The target time.

<a id="return-value"></a>

## Return Value

Return `true` to initiate an update and render for the target time. Return `false` to skip the update and render for the target time.
