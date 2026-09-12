> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonmethods](https://developer.apple.com/documentation/foundation/nscomparisonmethods)

# NSComparisonMethods (Swift)

**Framework:** Foundation

A collection of default comparison methods useful for performing specifier tests.

<a id="overview"></a>

## Overview

If you have scriptable objects that need to perform comparisons for scripting purposes, you may need to implement some of the methods declared in NSScriptingComparisonMethods. The default implementation provided for many of these methods by `NSObject` is appropriate for objects that implement a single comparison method whose selector, signature, and description match the following:

```objc
- (NSComparisonResult)compare:(id)object;
```

This method should return `NSOrderedAscending` if the receiver is less than `object`, `NSOrderedDescending` if the receiver is greater than `object`, and `NSOrderedSame` if the receiver and `object` are equal. For example, `NSString` does not implement most of the methods declared in this informal protocol, but `NSString` objects still handle messages conforming to this protocol properly because `NSString` implements a `compare:` method that meets the necessary requirements. Cocoa also includes appropriate `compare:` method implementations for the `NSDate`, `NSDecimalNumber`, and `NSValue` classes.

## Topics

### Performing comparisons

- [doesContain(\_:)](../objectivec/nsobject-swift.class/doescontain%28__%29.md): Returns a Boolean value that indicates whether the receiver contains a given object.
- [isCaseInsensitiveLike(\_:)](../objectivec/nsobject-swift.class/iscaseinsensitivelike%28__%29.md): Returns a Boolean value that indicates whether receiver is considered to be “like” a given string when the case of characters in the receiver is ignored.
- [isEqual(to:)](../objectivec/nsobject-swift.class/isequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is equal to another given object.
- [isGreaterThan(\_:)](../objectivec/nsobject-swift.class/isgreaterthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is greater than another given object.
- [isGreaterThanOrEqual(to:)](../objectivec/nsobject-swift.class/isgreaterthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is greater than or equal to another given object.
- [isLessThan(\_:)](../objectivec/nsobject-swift.class/islessthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is less than another given object.
- [isLessThanOrEqual(to:)](../objectivec/nsobject-swift.class/islessthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is less than or equal to another given object.
- [isLike(\_:)](../objectivec/nsobject-swift.class/islike%28__%29.md): Returns a Boolean value that indicates whether the receiver is “like” another given object.
- [isNotEqual(to:)](../objectivec/nsobject-swift.class/isnotequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is not equal to another given object.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### NSObject Script Support

- [NSScriptingComparisonMethods](../objectivec/nsscriptingcomparisonmethods.md): A collection of methods useful for comparing script objects.
- [NSScriptKeyValueCoding](../objectivec/nsscriptkeyvaluecoding.md): A collection of methods that provide additional capabilities for working with key-value coding.
- [NSScriptObjectSpecifiers](nsscriptobjectspecifiers.md): A collection of methods providing additional object specifier functionality.
- [NSScriptCoercionHandler](nsscriptcoercionhandler.md): A mechanism for converting one kind of scripting data to another.
- [NSScriptExecutionContext](nsscriptexecutioncontext.md): The context in which the current script command is executed.

# NSComparisonMethods (Objective-C)

**Framework:** Foundation

A collection of default comparison methods useful for performing specifier tests.

<a id="overview"></a>

## Overview

If you have scriptable objects that need to perform comparisons for scripting purposes, you may need to implement some of the methods declared in NSScriptingComparisonMethods. The default implementation provided for many of these methods by `NSObject` is appropriate for objects that implement a single comparison method whose selector, signature, and description match the following:

```objc
- (NSComparisonResult)compare:(id)object;
```

This method should return `NSOrderedAscending` if the receiver is less than `object`, `NSOrderedDescending` if the receiver is greater than `object`, and `NSOrderedSame` if the receiver and `object` are equal. For example, `NSString` does not implement most of the methods declared in this informal protocol, but `NSString` objects still handle messages conforming to this protocol properly because `NSString` implements a `compare:` method that meets the necessary requirements. Cocoa also includes appropriate `compare:` method implementations for the `NSDate`, `NSDecimalNumber`, and `NSValue` classes.

## Topics

### Performing comparisons

- [doesContain:](../objectivec/nsobject-swift.class/doescontain%28__%29.md): Returns a Boolean value that indicates whether the receiver contains a given object.
- [isCaseInsensitiveLike:](../objectivec/nsobject-swift.class/iscaseinsensitivelike%28__%29.md): Returns a Boolean value that indicates whether receiver is considered to be “like” a given string when the case of characters in the receiver is ignored.
- [isEqualTo:](../objectivec/nsobject-swift.class/isequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is equal to another given object.
- [isGreaterThan:](../objectivec/nsobject-swift.class/isgreaterthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is greater than another given object.
- [isGreaterThanOrEqualTo:](../objectivec/nsobject-swift.class/isgreaterthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is greater than or equal to another given object.
- [isLessThan:](../objectivec/nsobject-swift.class/islessthan%28__%29.md): Returns a Boolean value that indicates whether the receiver is less than another given object.
- [isLessThanOrEqualTo:](../objectivec/nsobject-swift.class/islessthanorequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is less than or equal to another given object.
- [isLike:](../objectivec/nsobject-swift.class/islike%28__%29.md): Returns a Boolean value that indicates whether the receiver is “like” another given object.
- [isNotEqualTo:](../objectivec/nsobject-swift.class/isnotequal%28to_%29.md): Returns a Boolean value that indicates whether the receiver is not equal to another given object.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### NSObject Script Support

- [NSScriptingComparisonMethods](../objectivec/nsscriptingcomparisonmethods.md): A collection of methods useful for comparing script objects.
- [NSScriptKeyValueCoding](../objectivec/nsscriptkeyvaluecoding.md): A collection of methods that provide additional capabilities for working with key-value coding.
- [NSScriptObjectSpecifiers](nsscriptobjectspecifiers.md): A collection of methods providing additional object specifier functionality.
- [NSScriptCoercionHandler](nsscriptcoercionhandler.md): A mechanism for converting one kind of scripting data to another.
- [NSScriptExecutionContext](nsscriptexecutioncontext.md): The context in which the current script command is executed.
