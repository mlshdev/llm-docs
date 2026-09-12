> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserver/registerlanguage(_:byvendor:)](https://developer.apple.com/documentation/foundation/nsspellserver/registerlanguage(_:byvendor:))

# registerLanguage(\_:byVendor:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Notifies the receiver of a language your spelling checker can check.

## Declaration

```swift
func registerLanguage(_ language: String?, byVendor vendor: String?) -> Bool
```

## Parameters

- `language`: A string specifying the English name of a language on Apple’s list of languages.
- `vendor`: A string that identifies the vendor (to distinguish your spelling checker from those that others may offer for the same language).

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the language is registered, [false](https://developer.apple.com/documentation/swift/false) if for some reason it can’t be registered.

<a id="Discussion"></a>

## Discussion

If your spelling checker supports more than one language, it should invoke this method once for each language. Registering a language-vendor combination causes it to appear in the Spelling panel’s pop-up menu of spelling checkers.

## See Also

### Providing Spelling Services

- [run()](run%28%29.md): Causes the receiver to start listening for spell-checking requests.

# registerLanguage:byVendor: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Notifies the receiver of a language your spelling checker can check.

## Declaration

```objectivec
- (BOOL) registerLanguage:(NSString *) language byVendor:(NSString *) vendor;
```

## Parameters

- `language`: A string specifying the English name of a language on Apple’s list of languages.
- `vendor`: A string that identifies the vendor (to distinguish your spelling checker from those that others may offer for the same language).

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the language is registered, [false](https://developer.apple.com/documentation/swift/false) if for some reason it can’t be registered.

<a id="Discussion"></a>

## Discussion

If your spelling checker supports more than one language, it should invoke this method once for each language. Registering a language-vendor combination causes it to appear in the Spelling panel’s pop-up menu of spelling checkers.

## See Also

### Providing Spelling Services

- [run](run%28%29.md): Causes the receiver to start listening for spell-checking requests.
