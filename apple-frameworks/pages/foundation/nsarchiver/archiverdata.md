> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/archiverdata](https://developer.apple.com/documentation/foundation/nsarchiver/archiverdata)

# archiverData (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The receiver’s archive data.

> Use NSKeyedArchiver instead

## Declaration

```swift
var archiverData: NSMutableData { get }
```

<a id="Discussion"></a>

## Discussion

The returned data object is the same one specified as the argument to [init(forWritingWith:)](init%28forwritingwith_%29.md). It contains whatever data has been encoded thus far by invocations of the various encoding methods. It is safest not to invoke this method until after [encodeRootObject(\_:)](encoderootobject%28__%29.md) has returned. In other words, although it is possible for a class to invoke this method from within its [encode(with:)](../nscoding/encode%28with_%29.md) method, that method must not alter the data.

# archiverData (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The receiver’s archive data.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
@property (retain, readonly) NSMutableData * archiverData;
```

<a id="Discussion"></a>

## Discussion

The returned data object is the same one specified as the argument to [initForWritingWithMutableData:](init%28forwritingwith_%29.md). It contains whatever data has been encoded thus far by invocations of the various encoding methods. It is safest not to invoke this method until after [encodeRootObject:](encoderootobject%28__%29.md) has returned. In other words, although it is possible for a class to invoke this method from within its [encodeWithCoder:](../nscoding/encode%28with_%29.md) method, that method must not alter the data.
