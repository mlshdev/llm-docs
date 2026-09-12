> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcontroller/init(nibname:bundle:)](https://developer.apple.com/documentation/uikit/uicollectionviewcontroller/init(nibname:bundle:))

# init(nibName:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a newly initialized view controller with the nib file in the specified bundle.

## Declaration

```swift
init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?)
```

## Parameters

- `nibNameOrNil`: The name of the nib file to associate with the view controller. The nib file name shouldn’t contain any leading path information. If you specify `nil`, the [nibName](../uiviewcontroller/nibname.md) property is set to `nil`.
- `nibBundleOrNil`: The bundle in which to search for the nib file. This method looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

<a id="return-value"></a>

## Return Value

A newly initialized [UICollectionViewController](../uicollectionviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

For more information on how to initialize a view controller from a nib file, see [init(nibName:bundle:)](../uiviewcontroller/init%28nibname_bundle_%29.md).

## See Also

### Creating a collection view controller

- [init(collectionViewLayout:)](init%28collectionviewlayout_%29.md): Initializes a collection view controller and configures the collection view with the provided layout.
- [init(coder:)](init%28coder_%29.md): Creates a collection view controller with the nib file in the specified bundle.

# initWithNibName:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a newly initialized view controller with the nib file in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithNibName:(NSString *) nibNameOrNil bundle:(NSBundle *) nibBundleOrNil;
```

## Parameters

- `nibNameOrNil`: The name of the nib file to associate with the view controller. The nib file name shouldn’t contain any leading path information. If you specify `nil`, the [nibName](../uiviewcontroller/nibname.md) property is set to `nil`.
- `nibBundleOrNil`: The bundle in which to search for the nib file. This method looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

<a id="return-value"></a>

## Return Value

A newly initialized [UICollectionViewController](../uicollectionviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

For more information on how to initialize a view controller from a nib file, see [initWithNibName:bundle:](../uiviewcontroller/init%28nibname_bundle_%29.md).

## See Also

### Creating a collection view controller

- [initWithCollectionViewLayout:](init%28collectionviewlayout_%29.md): Initializes a collection view controller and configures the collection view with the provided layout.
- [initWithCoder:](init%28coder_%29.md): Creates a collection view controller with the nib file in the specified bundle.
