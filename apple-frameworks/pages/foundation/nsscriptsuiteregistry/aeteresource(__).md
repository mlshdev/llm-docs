> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/aeteresource(_:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/aeteresource(_:))

# aeteResource(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSData` object that contains data in `'aete'` resource format describing the scriptability information currently known to the application.

## Declaration

```swift
func aeteResource(_ languageName: String) -> Data?
```

<a id="Discussion"></a>

## Discussion

This method is typically invoked to implement the `get aete` Apple event for an application that provides scriptability information in the script suite format. The `languageName` argument is the name of a language for which a localized resource directory (such as `English.lproj`) exists. This language indication specifies the set of `.scriptTerminology` files to be used to generate the data. `NSScriptSuiteRegistry` does not create an `'aete'` resource unless this method is called.

## See Also

### Getting Other Suite Information

- [appleEventCode(forSuite:)](appleeventcode%28forsuite_%29.md): Returns the Apple event code associated with the suite named `suiteName`, such as `‘core’` for the Core suite.
- [bundle(forSuite:)](bundle%28forsuite_%29.md): Returns the bundle containing the suite-definition property list (extension `.scriptSuite`) identified by `suiteName`.

# aeteResource: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSData` object that contains data in `'aete'` resource format describing the scriptability information currently known to the application.

## Declaration

```objectivec
- (NSData *) aeteResource:(NSString *) languageName;
```

<a id="Discussion"></a>

## Discussion

This method is typically invoked to implement the `get aete` Apple event for an application that provides scriptability information in the script suite format. The `languageName` argument is the name of a language for which a localized resource directory (such as `English.lproj`) exists. This language indication specifies the set of `.scriptTerminology` files to be used to generate the data. `NSScriptSuiteRegistry` does not create an `'aete'` resource unless this method is called.

## See Also

### Getting Other Suite Information

- [appleEventCodeForSuite:](appleeventcode%28forsuite_%29.md): Returns the Apple event code associated with the suite named `suiteName`, such as `‘core’` for the Core suite.
- [bundleForSuite:](bundle%28forsuite_%29.md): Returns the bundle containing the suite-definition property list (extension `.scriptSuite`) identified by `suiteName`.
