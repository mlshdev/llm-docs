> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcontroller/init(collectionviewlayout:)](https://developer.apple.com/documentation/uikit/uicollectionviewcontroller/init(collectionviewlayout:))

# init(collectionViewLayout:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a collection view controller and configures the collection view with the provided layout.

## Declaration

```swift
init(collectionViewLayout layout: UICollectionViewLayout)
```

## Parameters

- `layout`: The layout object to associate with the collection view. The layout controls how the collection view presents its cells and supplementary views.

<a id="return-value"></a>

## Return Value

An initialized `UICollectionViewController` object or `nil` if the object could not be created.

## See Also

### Creating a collection view controller

- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Returns a newly initialized view controller with the nib file in the specified bundle.
- [init(coder:)](init%28coder_%29.md): Creates a collection view controller with the nib file in the specified bundle.

# initWithCollectionViewLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a collection view controller and configures the collection view with the provided layout.

## Declaration

```objectivec
- (instancetype) initWithCollectionViewLayout:(UICollectionViewLayout *) layout;
```

## Parameters

- `layout`: The layout object to associate with the collection view. The layout controls how the collection view presents its cells and supplementary views.

<a id="return-value"></a>

## Return Value

An initialized `UICollectionViewController` object or `nil` if the object could not be created.

## See Also

### Creating a collection view controller

- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Returns a newly initialized view controller with the nib file in the specified bundle.
- [initWithCoder:](init%28coder_%29.md): Creates a collection view controller with the nib file in the specified bundle.
