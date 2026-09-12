> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistaterestoring/objectrestorationclass](https://developer.apple.com/documentation/uikit/uistaterestoring/objectrestorationclass)

# objectRestorationClass (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The class responsible for creating this object when restoring the app’s state.

## Declaration

```swift
optional var objectRestorationClass: (any UIObjectRestoration.Type)? { get }
```

<a id="Discussion"></a>

## Discussion

If an object has an associated restoration class, the [object(withRestorationIdentifierPath:coder:)](../uiobjectrestoration/object%28withrestorationidentifierpath_coder_%29.md) method of that class is called during state restoration. That method is responsible for returning the object that matches the provided path identifier information. If this property is`nil`, the object must already exist and be registered with the state restoration engine so that it can be found implicitly. You can register the object using the [registerObject(forStateRestoration:restorationIdentifier:)](../uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md) method at launch time.

The restoration class must conform to the [UIObjectRestoration](../uiobjectrestoration.md) protocol.

## See Also

### Accessing the object information

- [restorationParent](restorationparent.md): The parent object used to scope the current object.

# objectRestorationClass (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The class responsible for creating this object when restoring the app’s state.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) Class<UIObjectRestoration> * objectRestorationClass;
```

<a id="Discussion"></a>

## Discussion

If an object has an associated restoration class, the [objectWithRestorationIdentifierPath:coder:](../uiobjectrestoration/object%28withrestorationidentifierpath_coder_%29.md) method of that class is called during state restoration. That method is responsible for returning the object that matches the provided path identifier information. If this property is`nil`, the object must already exist and be registered with the state restoration engine so that it can be found implicitly. You can register the object using the [registerObjectForStateRestoration:restorationIdentifier:](../uiapplication/registerobject%28forstaterestoration_restorationidentifier_%29.md) method at launch time.

The restoration class must conform to the [UIObjectRestoration](../uiobjectrestoration.md) protocol.

## See Also

### Accessing the object information

- [restorationParent](restorationparent.md): The parent object used to scope the current object.
