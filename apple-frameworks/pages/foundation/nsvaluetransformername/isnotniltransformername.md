> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvaluetransformername/isnotniltransformername](https://developer.apple.com/documentation/foundation/nsvaluetransformername/isnotniltransformername)

# isNotNilTransformerName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This value transformer returns true if the value is non-nil.

## Declaration

```swift
static let isNotNilTransformerName: NSValueTransformerName
```

<a id="Discussion"></a>

## Discussion

This transformer is not reversible.

## See Also

### Type Properties

- [isNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [keyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [negateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [unarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [secureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

# NSIsNotNilTransformerName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This value transformer returns true if the value is non-nil.

## Declaration

```objectivec
extern NSValueTransformerName const NSIsNotNilTransformerName;
```

<a id="Discussion"></a>

## Discussion

This transformer is not reversible.

## See Also

### Type Properties

- [NSIsNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [NSKeyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [NSNegateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [NSUnarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [NSSecureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.
