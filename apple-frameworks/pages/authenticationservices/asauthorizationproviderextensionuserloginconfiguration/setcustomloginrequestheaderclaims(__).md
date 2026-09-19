> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionuserloginconfiguration/setcustomloginrequestheaderclaims(_:)

# setCustomLoginRequestHeaderClaims(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func setCustomLoginRequestHeaderClaims(_ claims: [String : Any]) throws
```

## See Also

### Instance Methods

- [setCustomAssertionRequestBodyClaims(\_:)](setcustomassertionrequestbodyclaims%28__%29.md)
- [setCustomAssertionRequestHeaderClaims(\_:)](setcustomassertionrequestheaderclaims%28__%29.md)
- [setCustomLoginRequestBodyClaims(\_:)](setcustomloginrequestbodyclaims%28__%29.md)

# setCustomLoginRequestHeaderClaims:returningError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (BOOL) setCustomLoginRequestHeaderClaims:(NSDictionary<NSString *,id> *) claims returningError:(NSError **) error;
```

## See Also

### Instance Methods

- [setCustomAssertionRequestBodyClaims:returningError:](setcustomassertionrequestbodyclaims%28__%29.md)
- [setCustomAssertionRequestHeaderClaims:returningError:](setcustomassertionrequestheaderclaims%28__%29.md)
- [setCustomLoginRequestBodyClaims:returningError:](setcustomloginrequestbodyclaims%28__%29.md)
