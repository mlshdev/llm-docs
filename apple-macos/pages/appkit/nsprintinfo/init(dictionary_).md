> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/init(dictionary:)](https://developer.apple.com/documentation/appkit/nsprintinfo/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a printing information object initialized with the parameters in the specified dictionary.

## Declaration

```swift
init(dictionary attributes: [NSPrintInfo.AttributeKey : Any])
```

## Parameters

- `attributes`: The possible key-value pairs contained in `aDictionary` are described in Constants.

<a id="return-value"></a>

## Return Value

An initialized `NSPrintInfo` object, or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for this class. Non-object values should be stored in `NSValue` objects (or an appropriate subclass like `NSNumber`) in the dictionary. See [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) for a list of types which should be stored using the `NSNumber` class; otherwise use `NSValue`.

## See Also

### Related Documentation

- [NSPrintInfo](../nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [dictionary()](dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.

### Creating the Printing Information Object

- [shared](shared.md): The shared printing information object.
- [init()](init%28%29.md): Creates a printing information object.
- [init(coder:)](init%28coder_%29.md): Creates a printing information object from data in an unarchiver.

# initWithDictionary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a printing information object initialized with the parameters in the specified dictionary.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attributes`: The possible key-value pairs contained in `aDictionary` are described in Constants.

<a id="return-value"></a>

## Return Value

An initialized `NSPrintInfo` object, or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for this class. Non-object values should be stored in `NSValue` objects (or an appropriate subclass like `NSNumber`) in the dictionary. See [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) for a list of types which should be stored using the `NSNumber` class; otherwise use `NSValue`.

## See Also

### Related Documentation

- [NSPrintInfo](../nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [dictionary](dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.

### Creating the Printing Information Object

- [sharedPrintInfo](shared.md): The shared printing information object.
- [init](init%28%29.md): Creates a printing information object.
- [initWithCoder:](init%28coder_%29.md): Creates a printing information object from data in an unarchiver.
