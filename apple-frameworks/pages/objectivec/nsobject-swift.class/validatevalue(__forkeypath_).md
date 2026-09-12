> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/validatevalue(_:forkeypath:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatevalue(_:forkeypath:))

# validateValue(\_:forKeyPath:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates whether the value specified by a given pointer is not valid for a given key path relative to the receiver.

## Declaration

```swift
func validateValue(_ ioValue: AutoreleasingUnsafeMutablePointer<AnyObject?>, forKeyPath inKeyPath: String) throws
```

## Parameters

- `ioValue`: A pointer to a new value for the property identified by `inKeyPath`. This method may modify or replace the value in order to make it valid.
- `inKeyPath`: The name of one of the receiver’s properties. The key path must specify an attribute or a to-one relationship. The key path has the form ```relationship``.``property``` (with one or more relationships); for example `department.name` or `department.manager.lastName`.

<a id="Discussion"></a>

## Discussion

In Swift, this method throws an error if the value isn’t valid.  In Objective-C, it returns a Boolean value.

The default implementation of this method gets the destination object for each relationship using [value(forKey:)](value%28forkey_%29.md) and returns the result of calling the [validateValue(\_:forKey:)](validatevalue%28__forkey_%29.md) method for the property.

## See Also

### Validation

- [validateValue(\_:forKey:)](validatevalue%28__forkey_%29.md): Indicates whether the value specified by a given pointer is valid, or can be made valid, for the property identified by a given key.

# validateValue:forKeyPath:error: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates whether the value specified by a given pointer is not valid for a given key path relative to the receiver.

## Declaration

```objectivec
- (BOOL) validateValue:(id*) ioValue forKeyPath:(NSString *) inKeyPath error:(NSError **) outError;
```

## Parameters

- `ioValue`: A pointer to a new value for the property identified by `inKeyPath`. This method may modify or replace the value in order to make it valid.
- `inKeyPath`: The name of one of the receiver’s properties. The key path must specify an attribute or a to-one relationship. The key path has the form ```relationship``.``property``` (with one or more relationships); for example `department.name` or `department.manager.lastName`.
- `outError`: If validation is necessary and `ioValue` is not transformed into a valid value, upon return contains an [NSError](../../foundation/nserror.md) object that describes the reason that `ioValue` is not a valid value.

<a id="return-value"></a>

## Return Value

A Boolean that is [YES](../yes.md) if the value pointed at by `ioValue` is valid for the property identified by `inKeyPath`, or if the method is able to modify the value at `ioValue` to make it valid; otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

In Swift, this method throws an error if the value isn’t valid.  In Objective-C, it returns a Boolean value.

The default implementation of this method gets the destination object for each relationship using [valueForKey:](value%28forkey_%29.md) and returns the result of calling the [validateValue:forKey:error:](validatevalue%28__forkey_%29.md) method for the property.

## See Also

### Validation

- [validateValue:forKey:error:](validatevalue%28__forkey_%29.md): Indicates whether the value specified by a given pointer is valid, or can be made valid, for the property identified by a given key.
