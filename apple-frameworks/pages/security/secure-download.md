> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secure-download](https://developer.apple.com/documentation/security/secure-download)

# Secure Download (Swift)

**Framework:** Security  
**Kind:** API Collection

Implement Apple’s Secure Download System in macOS.

<a id="overview"></a>

## Overview

The `Security.SecureDownload` API provides access to Apple’s Secure Download System. This API is only useful for certain specialized apps. Because of this, you must import this API explicitly:

```objc
#import <Security/SecureDownload.h>
```

## Topics

### Result Codes

- [Secure Download Result Codes](secure-download-result-codes.md): Result codes specific to the secure download API.

# Secure Download (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Implement Apple’s Secure Download System in macOS.

<a id="overview"></a>

## Overview

The `Security.SecureDownload` API provides access to Apple’s Secure Download System. This API is only useful for certain specialized apps. Because of this, you must import this API explicitly:

```objc
#import <Security/SecureDownload.h>
```

## Topics

### Download Creation

- [SecureDownloadCreateWithTicket](securedownloadcreatewithticket.md): Deprecated. Creates a secure download object for use during the download process.
- [SecureDownloadTrustEvaluateCallback](securedownloadtrustevaluatecallback.md): Deprecated. Optionally queries the user how to handle a failed trust evaluation.
- [SecureDownloadTrustSetupCallback](securedownloadtrustsetupcallback.md): Deprecated. Determines whether trust for a particular signer should be evaluated.
- [SecureDownloadTrustCallbackResult](securedownloadtrustcallbackresult.md): A flag used to indicate whether or not a signer should be evaluated.
- [SecureDownloadRef](securedownloadref.md): An opaque type representing a secure download object.

### Download Settings

- [SecureDownloadGetDownloadSize](securedownloadgetdownloadsize.md): Deprecated. Returns the size of the expected download.
- [SecureDownloadCopyCreationDate](securedownloadcopycreationdate.md): Deprecated. Returns download ticket’s creation date.
- [SecureDownloadCopyName](securedownloadcopyname.md): Deprecated. Returns the printable name of the download ticket.
- [SecureDownloadCopyTicketLocation](securedownloadcopyticketlocation.md): Deprecated. Copies the ticket location from a secure download URL.
- [SecureDownloadCopyURLs](securedownloadcopyurls.md): Deprecated. Returns a list of URLs from which the data can be downloaded.

### Receiving Data

- [SecureDownloadUpdateWithData](securedownloadupdatewithdata.md): Deprecated. Checks data received during download for validity.

### Download Completion

- [SecureDownloadFinished](securedownloadfinished.md): Deprecated. Concludes the secure download process.
- [SecureDownloadRelease](securedownloadrelease.md): Deprecated. Releases the memory associated with a secure download object.

### Result Codes

- [Secure Download Result Codes](secure-download-result-codes.md): Result codes specific to the secure download API.
