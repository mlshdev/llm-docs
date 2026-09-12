> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/loadsuite(with:from:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/loadsuite(with:from:))

# loadSuite(with:from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.

## Declaration

```swift
func loadSuite(with suiteDeclaration: [AnyHashable : Any], from bundle: Bundle)
```

<a id="Discussion"></a>

## Discussion

The method extracts information from the dictionary and caches it in various internal collection objects. If keys are missing or values are of the wrong type, it logs messages to the console. It also registers class descriptions and command descriptions. In registering a class description, it invokes the [NSClassDescription](../nsclassdescription.md) class method [register(\_:for:)](../nsclassdescription/register%28__for_%29.md). In registering a command description, it arranges for the Apple event translator to handle incoming Apple events that represent the defined commands.

This method is invoked when the shared instance is initialized and when bundles are loaded at runtime. Prior to invoking it, `NSScriptSuiteRegistry` creates the dictionary argument from the `.scriptSuite` property list. If you invoke this method in your code, you should try to do it before the application receives its first Apple event.

## See Also

### Related Documentation

- [register(\_:)](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.
- [shared()](shared%28%29.md): Returns the single, shared instance of `NSScriptSuiteRegistry`, creating it first if it doesn’t exist.
- [register(\_:)](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

### Loading Suites

- [loadSuites(from:)](loadsuites%28from_%29.md): Loads the suite definitions in bundle `aBundle`, invoking [loadSuite(with:from:)](loadsuite%28with_from_%29.md) for each suite found.

# loadSuiteWithDictionary:fromBundle: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.

## Declaration

```objectivec
- (void) loadSuiteWithDictionary:(NSDictionary *) suiteDeclaration fromBundle:(NSBundle *) bundle;
```

<a id="Discussion"></a>

## Discussion

The method extracts information from the dictionary and caches it in various internal collection objects. If keys are missing or values are of the wrong type, it logs messages to the console. It also registers class descriptions and command descriptions. In registering a class description, it invokes the [NSClassDescription](../nsclassdescription.md) class method [registerClassDescription:forClass:](../nsclassdescription/register%28__for_%29.md). In registering a command description, it arranges for the Apple event translator to handle incoming Apple events that represent the defined commands.

This method is invoked when the shared instance is initialized and when bundles are loaded at runtime. Prior to invoking it, `NSScriptSuiteRegistry` creates the dictionary argument from the `.scriptSuite` property list. If you invoke this method in your code, you should try to do it before the application receives its first Apple event.

## See Also

### Related Documentation

- [registerClassDescription:](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.
- [sharedScriptSuiteRegistry](shared%28%29.md): Returns the single, shared instance of `NSScriptSuiteRegistry`, creating it first if it doesn’t exist.
- [registerCommandDescription:](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

### Loading Suites

- [loadSuitesFromBundle:](loadsuites%28from_%29.md): Loads the suite definitions in bundle `aBundle`, invoking [loadSuiteWithDictionary:fromBundle:](loadsuite%28with_from_%29.md) for each suite found.
