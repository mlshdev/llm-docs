> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/name](https://developer.apple.com/documentation/scenekit/scnlight/name)

# name (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A name associated with the light.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can provide a descriptive name for a light to make managing your scene graph easier. Lights loaded from a scene file may have names assigned by an artist using a 3D authoring tool. To examine lights in a scene file without loading its scene graph, use the [SCNSceneSource](../scnscenesource.md) class.

Light names are saved when you export a scene to a file using its [write(to:options:delegate:progressHandler:)](../scnscene/write%28to_options_delegate_progresshandler_%29.md) method. Light names also appear in the Xcode scene editor.

## See Also

### Managing Light Attributes

- [attribute(forKey:)](attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [setAttribute(\_:forKey:)](setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.
- [Lighting Attribute Keys](../lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attribute(forKey:)](attribute%28forkey_%29.md) and [setAttribute(\_:forKey:)](setattribute%28__forkey_%29.md) methods.

# name (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A name associated with the light.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

You can provide a descriptive name for a light to make managing your scene graph easier. Lights loaded from a scene file may have names assigned by an artist using a 3D authoring tool. To examine lights in a scene file without loading its scene graph, use the [SCNSceneSource](../scnscenesource.md) class.

Light names are saved when you export a scene to a file using its [writeToURL:options:delegate:progressHandler:](../scnscene/write%28to_options_delegate_progresshandler_%29.md) method. Light names also appear in the Xcode scene editor.

## See Also

### Managing Light Attributes

- [attributeForKey:](attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [setAttribute:forKey:](setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.
- [Lighting Attribute Keys](../lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attributeForKey:](attribute%28forkey_%29.md) and [setAttribute:forKey:](setattribute%28__forkey_%29.md) methods.
