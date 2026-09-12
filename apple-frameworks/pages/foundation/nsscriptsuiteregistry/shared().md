> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/shared()](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/shared())

# shared() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the single, shared instance of `NSScriptSuiteRegistry`, creating it first if it doesn’t exist.

## Declaration

```swift
class func shared() -> NSScriptSuiteRegistry
```

<a id="Discussion"></a>

## Discussion

If it creates an instance, and if the application provides scriptability information in the script suite format, the method loads suite definitions in all frameworks and other bundles that the application currently imports or includes; if information is provided in the sdef format, the method loads information only from the specified sdef file. If in reading scriptability information an exception is `raised` because of parsing errors, it handles the exception by printing a line of information to the console.

## See Also

### Related Documentation

- [loadSuite(with:from:)](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.

### Getting and Setting the Shared Instance

- [setShared(\_:)](setshared%28__%29.md): Sets the single, shared instance of `NSScriptSuiteRegistry` to `registry`.

# sharedScriptSuiteRegistry (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the single, shared instance of `NSScriptSuiteRegistry`, creating it first if it doesn’t exist.

## Declaration

```objectivec
+ (NSScriptSuiteRegistry *) sharedScriptSuiteRegistry;
```

<a id="Discussion"></a>

## Discussion

If it creates an instance, and if the application provides scriptability information in the script suite format, the method loads suite definitions in all frameworks and other bundles that the application currently imports or includes; if information is provided in the sdef format, the method loads information only from the specified sdef file. If in reading scriptability information an exception is `raised` because of parsing errors, it handles the exception by printing a line of information to the console.

## See Also

### Related Documentation

- [loadSuiteWithDictionary:fromBundle:](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.

### Getting and Setting the Shared Instance

- [setSharedScriptSuiteRegistry:](setshared%28__%29.md): Sets the single, shared instance of `NSScriptSuiteRegistry` to `registry`.
