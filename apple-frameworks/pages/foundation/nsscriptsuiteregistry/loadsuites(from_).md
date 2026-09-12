> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/loadsuites(from:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/loadsuites(from:))

# loadSuites(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Loads the suite definitions in bundle `aBundle`, invoking [loadSuite(with:from:)](loadsuite%28with_from_%29.md) for each suite found.

## Declaration

```swift
func loadSuites(from bundle: Bundle)
```

<a id="Discussion"></a>

## Discussion

If errors occur while method is parsing a suite-definition file, the method logs error messages to the console.

## See Also

### Loading Suites

- [loadSuite(with:from:)](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.

# loadSuitesFromBundle: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Loads the suite definitions in bundle `aBundle`, invoking [loadSuiteWithDictionary:fromBundle:](loadsuite%28with_from_%29.md) for each suite found.

## Declaration

```objectivec
- (void) loadSuitesFromBundle:(NSBundle *) bundle;
```

<a id="Discussion"></a>

## Discussion

If errors occur while method is parsing a suite-definition file, the method logs error messages to the console.

## See Also

### Loading Suites

- [loadSuiteWithDictionary:fromBundle:](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.
