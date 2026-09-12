> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvaluetransformername](https://developer.apple.com/documentation/foundation/nsvaluetransformername)

# NSValueTransformerName (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Named value transformers defined by `NSValueTransformer`.

## Declaration

```swift
struct NSValueTransformerName
```

## Topics

### Type Properties

- [isNilTransformerName](nsvaluetransformername/isniltransformername.md): This value transformer returns true if the value is nil.
- [isNotNilTransformerName](nsvaluetransformername/isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [keyedUnarchiveFromDataTransformerName](nsvaluetransformername/keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [negateBooleanTransformerName](nsvaluetransformername/negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [unarchiveFromDataTransformerName](nsvaluetransformername/unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [secureUnarchiveFromDataTransformerName](nsvaluetransformername/secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

### Initializers

- [init(\_:)](nsvaluetransformername/init%28__%29.md)
- [init(rawValue:)](nsvaluetransformername/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using the Name-Based Registry

- [setValueTransformer(\_:forName:)](valuetransformer/setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [init(forName:)](valuetransformer/init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [valueTransformerNames()](valuetransformer/valuetransformernames%28%29.md): Returns an array of all the registered value transformers.

# NSValueTransformerName (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Named value transformers defined by `NSValueTransformer`.

## Declaration

```objectivec
typedef NSString * NSValueTransformerName;
```

## Topics

### Type Properties

- [NSIsNilTransformerName](nsvaluetransformername/isniltransformername.md): This value transformer returns true if the value is nil.
- [NSIsNotNilTransformerName](nsvaluetransformername/isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [NSKeyedUnarchiveFromDataTransformerName](nsvaluetransformername/keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [NSNegateBooleanTransformerName](nsvaluetransformername/negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [NSUnarchiveFromDataTransformerName](nsvaluetransformername/unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [NSSecureUnarchiveFromDataTransformerName](nsvaluetransformername/secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

## See Also

### Using the Name-Based Registry

- [setValueTransformer:forName:](valuetransformer/setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [valueTransformerForName:](valuetransformer/init%28forname_%29.md): Returns the value transformer identified by a given identifier.
- [valueTransformerNames](valuetransformer/valuetransformernames%28%29.md): Returns an array of all the registered value transformers.
