> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinib/init(nibname:bundle:)](https://developer.apple.com/documentation/uikit/uinib/init(nibname:bundle:))

# init(nibName:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Returns a nib object from the nib file in the specified bundle.

## Declaration

```swift
init(nibName name: String, bundle bundleOrNil: Bundle?)
```

## Parameters

- `name`: The name of the nib file, without any leading path information.
- `bundleOrNil`: The bundle in which to search for the nib file. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized [UINib](../uinib.md) object. An exception is thrown if there were errors during initialization or the nib file could not be located.

<a id="Discussion"></a>

## Discussion

The [UINib](../uinib.md) object looks for the nib file in the bundle’s language-specific project directories first, followed by the `Resources` directory.

## See Also

### Creating a nib object

- [init(data:bundle:)](init%28data_bundle_%29.md): Deprecated. Creates a nib object from nib data stored in memory.

# nibWithNibName:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Returns a nib object from the nib file in the specified bundle.

## Declaration

```objectivec
+ (UINib *) nibWithNibName:(NSString *) name bundle:(NSBundle *) bundleOrNil;
```

## Parameters

- `name`: The name of the nib file, without any leading path information.
- `bundleOrNil`: The bundle in which to search for the nib file. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized [UINib](../uinib.md) object. An exception is thrown if there were errors during initialization or the nib file could not be located.

<a id="Discussion"></a>

## Discussion

The [UINib](../uinib.md) object looks for the nib file in the bundle’s language-specific project directories first, followed by the `Resources` directory.

## See Also

### Creating a nib object

- [nibWithData:bundle:](init%28data_bundle_%29.md): Deprecated. Creates a nib object from nib data stored in memory.
