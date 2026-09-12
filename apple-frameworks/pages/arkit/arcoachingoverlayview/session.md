> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/session](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/session)

# session (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The session this view uses to provide coaching.

## Declaration

```swift
var session: ARSession? { get set }
```

<a id="Discussion"></a>

## Discussion

The coaching overlay monitors your app’s [ARSession](../arsession.md) and reacts according to its tracking status. You don’t need to set this property if you set [sessionProvider](sessionprovider.md) instead.

## See Also

### Providing the Session

- [sessionProvider](sessionprovider.md): An object you designate that provides the current session.

# session (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The session this view uses to provide coaching.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) ARSession * session;
```

<a id="Discussion"></a>

## Discussion

The coaching overlay monitors your app’s [ARSession](../arsession.md) and reacts according to its tracking status. You don’t need to set this property if you set [sessionProvider](sessionprovider.md) instead.

## See Also

### Providing the Session

- [sessionProvider](sessionprovider.md): An object you designate that provides the current session.
