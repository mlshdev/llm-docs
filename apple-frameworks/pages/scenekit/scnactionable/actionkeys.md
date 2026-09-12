> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/actionkeys](https://developer.apple.com/documentation/scenekit/scnactionable/actionkeys)

# actionKeys (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The list of keys for which the node has attached actions.

## Declaration

```swift
var actionKeys: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to list actions you scheduled using the [runAction(\_:forKey:)](runaction%28__forkey_%29.md) or [runAction(\_:forKey:completionHandler:)](runaction%28__forkey_completionhandler_%29.md) method.

## See Also

### Inspecting a Node’s Running Actions

- [action(forKey:)](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](hasactions.md): A Boolean value that indicates whether the node is currently executing any actions.

# actionKeys (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The list of keys for which the node has attached actions.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * actionKeys;
```

<a id="Discussion"></a>

## Discussion

Use this property to list actions you scheduled using the [runAction:forKey:](runaction%28__forkey_%29.md) or [runAction:forKey:completionHandler:](runaction%28__forkey_completionhandler_%29.md) method.

## See Also

### Inspecting a Node’s Running Actions

- [actionForKey:](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](hasactions.md): A Boolean value that indicates whether the node is currently executing any actions.
