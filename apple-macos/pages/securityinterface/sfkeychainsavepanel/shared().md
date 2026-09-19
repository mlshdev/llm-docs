> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/shared()

# shared() (Swift)

**Framework:** Security Interface  
**Kind:** Type Method  
**Availability:** macOS 10.3+

Returns a shared keychain save panel object.

## Declaration

```swift
class func shared() -> SFKeychainSavePanel!
```

<a id="Discussion"></a>

## Discussion

If the shared object has not already been created, this method allocates and initializes the object first.

## See Also

### Related Documentation

- [Keychain Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000897)

# sharedKeychainSavePanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Type Method  
**Availability:** macOS 10.3+

Returns a shared keychain save panel object.

## Declaration

```objectivec
+ (SFKeychainSavePanel *) sharedKeychainSavePanel;
```

<a id="Discussion"></a>

## Discussion

If the shared object has not already been created, this method allocates and initializes the object first.

## See Also

### Related Documentation

- [Keychain Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000897)
