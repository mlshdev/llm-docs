> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatasourcemodelassociation/indexpathforelement(withmodelidentifier:in:)](https://developer.apple.com/documentation/uikit/uidatasourcemodelassociation/indexpathforelement(withmodelidentifier:in:))

# indexPathForElement(withModelIdentifier:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the current index of the data object with the specified identifier.

## Declaration

```swift
func indexPathForElement(withModelIdentifier identifier: String, in view: UIView) -> IndexPath?
```

## Parameters

- `identifier`: The identifier for the requested data object. Use this identifier to locate the matching object in your data source object. This is the same string that your app’s [modelIdentifierForElement(at:in:)](modelidentifierforelement%28at_in_%29.md) method returned when encoding the data originally.
- `view`: The view into which the object is being inserted.

<a id="return-value"></a>

## Return Value

The current index of the object whose data matches the value in `identifier`, or `nil` if the object was not found.

<a id="Discussion"></a>

## Discussion

During state restoration, `view` can call this method to locate objects that aren’t where they were expected to be. This can happen if the number of objects in the table isn’t the same as during the previous launch cycle. The view uses the information to ensure that the rows with the same data are once again selected or scrolled into view, even if those rows are in a different location now.

## See Also

### Locating the data

- [modelIdentifierForElement(at:in:)](modelidentifierforelement%28at_in_%29.md): Returns the string that uniquely identifies the data at the specified location in the view.

# indexPathForElementWithModelIdentifier:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the current index of the data object with the specified identifier.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForElementWithModelIdentifier:(NSString *) identifier inView:(UIView *) view;
```

## Parameters

- `identifier`: The identifier for the requested data object. Use this identifier to locate the matching object in your data source object. This is the same string that your app’s [modelIdentifierForElementAtIndexPath:inView:](modelidentifierforelement%28at_in_%29.md) method returned when encoding the data originally.
- `view`: The view into which the object is being inserted.

<a id="return-value"></a>

## Return Value

The current index of the object whose data matches the value in `identifier`, or `nil` if the object was not found.

<a id="Discussion"></a>

## Discussion

During state restoration, `view` can call this method to locate objects that aren’t where they were expected to be. This can happen if the number of objects in the table isn’t the same as during the previous launch cycle. The view uses the information to ensure that the rows with the same data are once again selected or scrolled into view, even if those rows are in a different location now.

## See Also

### Locating the data

- [modelIdentifierForElementAtIndexPath:inView:](modelidentifierforelement%28at_in_%29.md): Returns the string that uniquely identifies the data at the specified location in the view.
