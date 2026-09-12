> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvaluetransformername/isniltransformername](https://developer.apple.com/documentation/foundation/nsvaluetransformername/isniltransformername)

# isNilTransformerName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This value transformer returns true if the value is nil.

## Declaration

```swift
static let isNilTransformerName: NSValueTransformerName
```

<a id="Discussion"></a>

## Discussion

This transformer is not reversible.

## See Also

### Type Properties

- [isNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [keyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [negateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [unarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [secureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

# NSIsNilTransformerName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This value transformer returns true if the value is nil.

## Declaration

```objectivec
extern NSValueTransformerName const NSIsNilTransformerName;
```

<a id="Discussion"></a>

## Discussion

This transformer is not reversible.

## See Also

### Type Properties

- [NSIsNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [NSKeyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [NSNegateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [NSUnarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [NSSecureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.
