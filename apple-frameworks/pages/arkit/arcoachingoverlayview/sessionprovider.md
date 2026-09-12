> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/sessionprovider](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/sessionprovider)

# sessionProvider (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object you designate that provides the current session.

## Declaration

```swift
@IBOutlet weak var sessionProvider: (any ARSessionProviding)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to set the coaching overlay’s [session](session.md) when loading from a storyboard. If you set this property at runtime, the coaching overlay keeps its [session](session.md) property up to date for you. If your app recreates its [ARSession](../arsession.md) at any point, you may find it convienient to set the [sessionProvider](sessionprovider.md) once rather than update the coaching overlay’s [session](session.md) manually.

## See Also

### Providing the Session

- [session](session.md): The session this view uses to provide coaching.

# sessionProvider (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object you designate that provides the current session.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) NSObject<ARSessionProviding> * sessionProvider;
```

<a id="Discussion"></a>

## Discussion

Use this property to set the coaching overlay’s [session](session.md) when loading from a storyboard. If you set this property at runtime, the coaching overlay keeps its [session](session.md) property up to date for you. If your app recreates its [ARSession](../arsession.md) at any point, you may find it convienient to set the [sessionProvider](sessionprovider.md) once rather than update the coaching overlay’s [session](session.md) manually.

## See Also

### Providing the Session

- [session](session.md): The session this view uses to provide coaching.
