> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnumber/numberwithchar:](https://developer.apple.com/documentation/foundation/nsnumber/numberwithchar:)

# numberWithChar:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an `NSNumber` object containing a given value, treating it as a signed `char`.

## Declaration

```objectivec
+ (NSNumber *) numberWithChar:(char) value;
```

## Parameters

- `value`: The value for the new number.

<a id="return-value"></a>

## Return Value

An `NSNumber` object containing `value`, treating it as a signed `char`.

## See Also

### Creating an NSNumber Object

- [numberWithBool:](numberwithbool_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a `BOOL`.
- [numberWithDouble:](numberwithdouble_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a `double`.
- [numberWithFloat:](numberwithfloat_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a `float`.
- [numberWithInt:](numberwithint_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a signed `int`.
- [numberWithInteger:](numberwithinteger_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `NSInteger`.
- [numberWithLong:](numberwithlong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a signed `long`.
- [numberWithLongLong:](numberwithlonglong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a signed `long long`.
- [numberWithShort:](numberwithshort_.md): Creates and returns an `NSNumber` object containing `value`, treating it as a signed `short`.
- [numberWithUnsignedChar:](numberwithunsignedchar_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned char`.
- [numberWithUnsignedInt:](numberwithunsignedint_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned int`.
- [numberWithUnsignedInteger:](numberwithunsignedinteger_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `NSUInteger`.
- [numberWithUnsignedLong:](numberwithunsignedlong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned long`.
- [numberWithUnsignedLongLong:](numberwithunsignedlonglong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned long long`.
- [numberWithUnsignedShort:](numberwithunsignedshort_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned short`.
