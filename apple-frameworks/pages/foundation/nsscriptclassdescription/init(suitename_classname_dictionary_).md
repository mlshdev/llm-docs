> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/init(suitename:classname:dictionary:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/init(suitename:classname:dictionary:))

# init(suiteName:className:dictionary:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns a newly allocated instance of `NSScriptClassDescription`.

## Declaration

```swift
init?(suiteName: String, className: String, dictionary classDeclaration: [AnyHashable : Any]?)
```

## Parameters

- `suiteName`: The name of the suite (in the application’s scriptability information) that the class belongs to. For example, `"AppName Suite"`.
- `className`: The name of the class that this instance describes.
- `classDeclaration`: A class declaration dictionary of the sort that is valid in script suite property list files. This dictionary provides information about the class such as its attributes and relationships.

<a id="return-value"></a>

## Return Value

The initialized instance. Returns `nil` if the event code value for the class description itself is missing or is not an `NSString`. Also returns `nil` if the superclass name or any of the subdictionaries of descriptions are not of the right type.

<a id="Discussion"></a>

## Discussion

This method registers `self` with the application’s global instance of [NSScriptSuiteRegistry](../nsscriptsuiteregistry.md).

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)

# initWithSuiteName:className:dictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns a newly allocated instance of `NSScriptClassDescription`.

## Declaration

```objectivec
- (instancetype) initWithSuiteName:(NSString *) suiteName className:(NSString *) className dictionary:(NSDictionary *) classDeclaration;
```

## Parameters

- `suiteName`: The name of the suite (in the application’s scriptability information) that the class belongs to. For example, `"AppName Suite"`.
- `className`: The name of the class that this instance describes.
- `classDeclaration`: A class declaration dictionary of the sort that is valid in script suite property list files. This dictionary provides information about the class such as its attributes and relationships.

<a id="return-value"></a>

## Return Value

The initialized instance. Returns `nil` if the event code value for the class description itself is missing or is not an `NSString`. Also returns `nil` if the superclass name or any of the subdictionaries of descriptions are not of the right type.

<a id="Discussion"></a>

## Discussion

This method registers `self` with the application’s global instance of [NSScriptSuiteRegistry](../nsscriptsuiteregistry.md).

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)
