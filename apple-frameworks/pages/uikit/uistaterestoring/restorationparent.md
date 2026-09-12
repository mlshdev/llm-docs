> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistaterestoring/restorationparent](https://developer.apple.com/documentation/uikit/uistaterestoring/restorationparent)

# restorationParent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The parent object used to scope the current object.

## Declaration

```swift
optional var restorationParent: (any UIStateRestoring)? { get }
```

<a id="Discussion"></a>

## Discussion

Returning an object from this property lets you use the same restoration identifier for objects with similar behavior but different parents. When registering objects, the [registerObject(forStateRestoration:restorationIdentifier:)](../uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md) method checks the value of this property, using the value as the containing scope for the object. For example, an object associated with a view controller can make the view controller its parent.

## See Also

### Accessing the object information

- [objectRestorationClass](objectrestorationclass.md): The class responsible for creating this object when restoring the app’s state.

# restorationParent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The parent object used to scope the current object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<UIStateRestoring> restorationParent;
```

<a id="Discussion"></a>

## Discussion

Returning an object from this property lets you use the same restoration identifier for objects with similar behavior but different parents. When registering objects, the [registerObjectForStateRestoration:restorationIdentifier:](../uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md) method checks the value of this property, using the value as the containing scope for the object. For example, an object associated with a view controller can make the view controller its parent.

## See Also

### Accessing the object information

- [objectRestorationClass](objectrestorationclass.md): The class responsible for creating this object when restoring the app’s state.
