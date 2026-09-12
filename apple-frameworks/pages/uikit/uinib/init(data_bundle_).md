> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinib/init(data:bundle:)](https://developer.apple.com/documentation/uikit/uinib/init(data:bundle:))

# init(data:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates a nib object from nib data stored in memory.

## Declaration

```swift
init(data: Data, bundle bundleOrNil: Bundle?)
```

## Parameters

- `data`: A block of memory that contains nib data.
- `bundleOrNil`: The bundle in which to search for resources referenced by the nib. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized [UINib](../uinib.md) object. An exception is thrown if there were errors during initialization or the nib data could not be located.

<a id="Discussion"></a>

## Discussion

The [UINib](../uinib.md) object looks for the nib file in the bundle’s language-specific project directories first, followed by the `Resources` directory.

The preferred mechanism for instantiating [UINib](../uinib.md) objects is with [init(nibName:bundle:)](init%28nibname_bundle_%29.md). A [UINib](../uinib.md) object instantiated using [init(data:bundle:)](init%28data_bundle_%29.md) can’t release the cached data under low memory conditions. Your app should prepare to release the [UINib](../uinib.md) object and the data under low memory conditions, recreating both the next time the app needs to instantiate the nib.

## See Also

### Creating a nib object

- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Deprecated. Returns a nib object from the nib file in the specified bundle.

# nibWithData:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates a nib object from nib data stored in memory.

## Declaration

```objectivec
+ (UINib *) nibWithData:(NSData *) data bundle:(NSBundle *) bundleOrNil;
```

## Parameters

- `data`: A block of memory that contains nib data.
- `bundleOrNil`: The bundle in which to search for resources referenced by the nib. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized [UINib](../uinib.md) object. An exception is thrown if there were errors during initialization or the nib data could not be located.

<a id="Discussion"></a>

## Discussion

The [UINib](../uinib.md) object looks for the nib file in the bundle’s language-specific project directories first, followed by the `Resources` directory.

The preferred mechanism for instantiating [UINib](../uinib.md) objects is with [nibWithNibName:bundle:](init%28nibname_bundle_%29.md). A [UINib](../uinib.md) object instantiated using [nibWithData:bundle:](init%28data_bundle_%29.md) can’t release the cached data under low memory conditions. Your app should prepare to release the [UINib](../uinib.md) object and the data under low memory conditions, recreating both the next time the app needs to instantiate the nib.

## See Also

### Creating a nib object

- [nibWithNibName:bundle:](init%28nibname_bundle_%29.md): Deprecated. Returns a nib object from the nib file in the specified bundle.
