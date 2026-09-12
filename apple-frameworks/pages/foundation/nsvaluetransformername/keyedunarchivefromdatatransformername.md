> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvaluetransformername/keyedunarchivefromdatatransformername](https://developer.apple.com/documentation/foundation/nsvaluetransformername/keyedunarchivefromdatatransformername)

# keyedUnarchiveFromDataTransformerName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.

> Use [secureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md) instead.

## Declaration

```swift
static let keyedUnarchiveFromDataTransformerName: NSValueTransformerName
```

<a id="Discussion"></a>

## Discussion

The transformer this property references returns the [NSData](../nsdata.md) instance created by archiving the value using keyed archiving. This transformer requires that an object implement the [NSCoding](../nscoding.md) protocol using keyed archiving in order to archive and unarchive with this transformer.

## See Also

### Type Properties

- [isNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [isNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [negateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [unarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [secureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

# NSKeyedUnarchiveFromDataTransformerName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.

> Use [NSSecureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md) instead.

## Declaration

```objectivec
extern NSValueTransformerName const NSKeyedUnarchiveFromDataTransformerName;
```

<a id="Discussion"></a>

## Discussion

The transformer this property references returns the [NSData](../nsdata.md) instance created by archiving the value using keyed archiving. This transformer requires that an object implement the [NSCoding](../nscoding.md) protocol using keyed archiving in order to archive and unarchive with this transformer.

## See Also

### Type Properties

- [NSIsNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [NSIsNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [NSNegateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [NSUnarchiveFromDataTransformerName](unarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data from an object you provide.
- [NSSecureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.
