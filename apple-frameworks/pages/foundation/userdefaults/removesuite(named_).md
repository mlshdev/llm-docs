> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/removesuite(named:)](https://developer.apple.com/documentation/foundation/userdefaults/removesuite(named:))

# removeSuite(named:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified domain from the search list of the current object.

## Declaration

```swift
func removeSuite(named suiteName: String)
```

## Parameters

- `suiteName`: The bundle identifier for the domain you want to remove. Specify the same string you used when you added the domain.

## See Also

### Adding and removing search domains

- [addSuite(named:)](addsuite%28named_%29.md): Inserts settings for the specified domain into the search list of the current object.

# removeSuiteNamed: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified domain from the search list of the current object.

## Declaration

```objectivec
- (void) removeSuiteNamed:(NSString *) suiteName;
```

## Parameters

- `suiteName`: The bundle identifier for the domain you want to remove. Specify the same string you used when you added the domain.

## See Also

### Adding and removing search domains

- [addSuiteNamed:](addsuite%28named_%29.md): Inserts settings for the specified domain into the search list of the current object.
