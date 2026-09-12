> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserver/run()](https://developer.apple.com/documentation/foundation/nsspellserver/run())

# run() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Causes the receiver to start listening for spell-checking requests.

## Declaration

```swift
func run()
```

<a id="Discussion"></a>

## Discussion

This method starts a loop that never returns; you need to set the `NSSpellServer` object’s delegate before sending this message.

## See Also

### Related Documentation

- [delegate](delegate.md): Returns the receiver’s delegate.

### Providing Spelling Services

- [registerLanguage(\_:byVendor:)](registerlanguage%28__byvendor_%29.md): Notifies the receiver of a language your spelling checker can check.

# run (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Causes the receiver to start listening for spell-checking requests.

## Declaration

```objectivec
- (void) run;
```

<a id="Discussion"></a>

## Discussion

This method starts a loop that never returns; you need to set the `NSSpellServer` object’s delegate before sending this message.

## See Also

### Related Documentation

- [delegate](delegate.md): Returns the receiver’s delegate.

### Providing Spelling Services

- [registerLanguage:byVendor:](registerlanguage%28__byvendor_%29.md): Notifies the receiver of a language your spelling checker can check.
