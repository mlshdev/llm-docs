> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatasourcemodelassociation/modelidentifierforelement(at:in:)](https://developer.apple.com/documentation/uikit/uidatasourcemodelassociation/modelidentifierforelement(at:in:))

# modelIdentifierForElement(at:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the string that uniquely identifies the data at the specified location in the view.

## Declaration

```swift
func modelIdentifierForElement(at idx: IndexPath, in view: UIView) -> String?
```

## Parameters

- `idx`: The index path to the requested data object.
- `view`: The view that contains the data object.

<a id="return-value"></a>

## Return Value

A string that uniquely identifies the data object.

<a id="Discussion"></a>

## Discussion

Use the provided information to locate the requested data object. From that object, extract a string that can be used later to identify the same piece of data again. The string you return must not be based on transient information, such as the pointer to the current object in memory; it must instead be tied to the underlying data. In fact, if two different in-memory objects represent the same piece of data in your app, they must both return the same model identifier string.

## See Also

### Locating the data

- [indexPathForElement(withModelIdentifier:in:)](indexpathforelement%28withmodelidentifier_in_%29.md): Returns the current index of the data object with the specified identifier.

# modelIdentifierForElementAtIndexPath:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the string that uniquely identifies the data at the specified location in the view.

## Declaration

```objectivec
- (NSString *) modelIdentifierForElementAtIndexPath:(NSIndexPath *) idx inView:(UIView *) view;
```

## Parameters

- `idx`: The index path to the requested data object.
- `view`: The view that contains the data object.

<a id="return-value"></a>

## Return Value

A string that uniquely identifies the data object.

<a id="Discussion"></a>

## Discussion

Use the provided information to locate the requested data object. From that object, extract a string that can be used later to identify the same piece of data again. The string you return must not be based on transient information, such as the pointer to the current object in memory; it must instead be tied to the underlying data. In fact, if two different in-memory objects represent the same piece of data in your app, they must both return the same model identifier string.

## See Also

### Locating the data

- [indexPathForElementWithModelIdentifier:inView:](indexpathforelement%28withmodelidentifier_in_%29.md): Returns the current index of the data object with the specified identifier.
