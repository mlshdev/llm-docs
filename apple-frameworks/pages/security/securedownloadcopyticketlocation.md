> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/securedownloadcopyticketlocation

# SecureDownloadCopyTicketLocation

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Copies the ticket location from a secure download URL.

## Declaration

```objectivec
OSStatus SecureDownloadCopyTicketLocation(CFURLRef url, CFURLRef*ticketLocation);
```

## Parameters

- `url`: A secure download URL.
- `ticketLocation`: A pointer to a [CFURLRef](../corefoundation/cfurl.md) object that the function fills with the URL of the ticket.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md).
