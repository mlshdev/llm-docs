> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvaluetransformername/secureunarchivefromdatatransformername](https://developer.apple.com/documentation/foundation/nsvaluetransformername/secureunarchivefromdatatransformername)

# secureUnarchiveFromDataTransformerName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

## Declaration

```swift
static let secureUnarchiveFromDataTransformerName: NSValueTransformerName
```

<a id="Discussion"></a>

## Discussion

The transformer this property references returns the [NSData](../nsdata.md) instance created by archiving the value using secure keyed archiving. This transformer requires that an object implement the [NSSecureCoding](../nssecurecoding.md) protocol in order to archive and unarchive with this transformer.

## See Also

### Type Properties

- [isNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [isNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [keyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [negateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [unarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.

# NSSecureUnarchiveFromDataTransformerName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

## Declaration

```objectivec
extern NSValueTransformerName const NSSecureUnarchiveFromDataTransformerName;
```

<a id="Discussion"></a>

## Discussion

The transformer this property references returns the [NSData](../nsdata.md) instance created by archiving the value using secure keyed archiving. This transformer requires that an object implement the [NSSecureCoding](../nssecurecoding.md) protocol in order to archive and unarchive with this transformer.

## See Also

### Type Properties

- [NSIsNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [NSIsNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [NSKeyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [NSNegateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [NSUnarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
