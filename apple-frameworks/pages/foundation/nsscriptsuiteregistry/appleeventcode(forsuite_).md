> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/appleeventcode(forsuite:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/appleeventcode(forsuite:))

# appleEventCode(forSuite:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code associated with the suite named `suiteName`, such as `‘core’` for the Core suite.

## Declaration

```swift
func appleEventCode(forSuite suiteName: String) -> FourCharCode
```

## See Also

### Related Documentation

- [suite(forAppleEventCode:)](suite%28forappleeventcode_%29.md): Returns the name of the suite definition associated with the given four-character Apple event code, `code`.

### Getting Other Suite Information

- [aeteResource(\_:)](aeteresource%28__%29.md): Returns an `NSData` object that contains data in `'aete'` resource format describing the scriptability information currently known to the application.
- [bundle(forSuite:)](bundle%28forsuite_%29.md): Returns the bundle containing the suite-definition property list (extension `.scriptSuite`) identified by `suiteName`.

# appleEventCodeForSuite: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code associated with the suite named `suiteName`, such as `‘core’` for the Core suite.

## Declaration

```objectivec
- (FourCharCode) appleEventCodeForSuite:(NSString *) suiteName;
```

## See Also

### Related Documentation

- [suiteForAppleEventCode:](suite%28forappleeventcode_%29.md): Returns the name of the suite definition associated with the given four-character Apple event code, `code`.

### Getting Other Suite Information

- [aeteResource:](aeteresource%28__%29.md): Returns an `NSData` object that contains data in `'aete'` resource format describing the scriptability information currently known to the application.
- [bundleForSuite:](bundle%28forsuite_%29.md): Returns the bundle containing the suite-definition property list (extension `.scriptSuite`) identified by `suiteName`.
