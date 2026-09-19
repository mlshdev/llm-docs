> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/bundle(forsuite:)

# bundle(forSuite:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the bundle containing the suite-definition property list (extension `.scriptSuite`) identified by `suiteName`.

## Declaration

```swift
func bundle(forSuite suiteName: String) -> Bundle?
```

## See Also

### Getting Other Suite Information

- [aeteResource(\_:)](aeteresource%28__%29.md): Returns an `NSData` object that contains data in `'aete'` resource format describing the scriptability information currently known to the application.
- [appleEventCode(forSuite:)](appleeventcode%28forsuite_%29.md): Returns the Apple event code associated with the suite named `suiteName`, such as `‘core’` for the Core suite.

# bundleForSuite: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the bundle containing the suite-definition property list (extension `.scriptSuite`) identified by `suiteName`.

## Declaration

```objectivec
- (NSBundle *) bundleForSuite:(NSString *) suiteName;
```

## See Also

### Getting Other Suite Information

- [aeteResource:](aeteresource%28__%29.md): Returns an `NSData` object that contains data in `'aete'` resource format describing the scriptability information currently known to the application.
- [appleEventCodeForSuite:](appleeventcode%28forsuite_%29.md): Returns the Apple event code associated with the suite named `suiteName`, such as `‘core’` for the Core suite.
