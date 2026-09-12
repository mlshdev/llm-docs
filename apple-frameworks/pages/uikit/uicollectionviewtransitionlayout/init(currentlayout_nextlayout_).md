> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewtransitionlayout/init(currentlayout:nextlayout:)](https://developer.apple.com/documentation/uikit/uicollectionviewtransitionlayout/init(currentlayout:nextlayout:))

# init(currentLayout:nextLayout:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a transition layout object.

## Declaration

```swift
init(currentLayout: UICollectionViewLayout, nextLayout newLayout: UICollectionViewLayout)
```

## Parameters

- `currentLayout`: The layout object currently in use by the collection view.
- `newLayout`: The new layout object that is being installed into the collection view.

<a id="return-value"></a>

## Return Value

An initialized transition layout object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method initializes the transition layout object and saves references to the current and new layout objects so that you can access them later. If you subclass and implement your own initialization method, you must call this method to initialize the superclass.

## See Also

### Initializing the transition layout object

- [init(coder:)](init%28coder_%29.md): Creates a transition layout object from data in an unarchiver.

# initWithCurrentLayout:nextLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a transition layout object.

## Declaration

```objectivec
- (instancetype) initWithCurrentLayout:(UICollectionViewLayout *) currentLayout nextLayout:(UICollectionViewLayout *) newLayout;
```

## Parameters

- `currentLayout`: The layout object currently in use by the collection view.
- `newLayout`: The new layout object that is being installed into the collection view.

<a id="return-value"></a>

## Return Value

An initialized transition layout object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method initializes the transition layout object and saves references to the current and new layout objects so that you can access them later. If you subclass and implement your own initialization method, you must call this method to initialize the superclass.

## See Also

### Initializing the transition layout object

- [initWithCoder:](init%28coder_%29.md): Creates a transition layout object from data in an unarchiver.
