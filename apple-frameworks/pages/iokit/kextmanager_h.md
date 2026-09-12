> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kextmanager_h](https://developer.apple.com/documentation/iokit/kextmanager_h)

# KextManager.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

The KextManager API provides a simple interface for applications to load kernel extensions (kexts) via RPC to kextd, and to look up the URLs for kexts by bundle identifier.

<a id="overview"></a>

## Overview

<a id="1675482"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<libkern/OSReturn.h\>
- \<sys/cdefs.h\>

## Topics

### Miscellaneous

- [KextManagerCopyLoadedKextInfo](1562908-kextmanagercopyloadedkextinfo.md): Returns information about loaded kexts in a dictionary.
- [KextManagerCreateURLForBundleIdentifier](1562905-kextmanagercreateurlforbundleide.md): Create a URL locating a kext with a given bundle identifier.
- [KextManagerLoadKextWithIdentifier](1562907-kextmanagerloadkextwithidentifie.md): Request the kext loading system to load a kext with a given bundle identifier.
- [KextManagerLoadKextWithURL](1562906-kextmanagerloadkextwithurl.md): Request the kext loading system to load a kext with a given URL.
- [KextManagerUnloadKextWithIdentifier](1562904-kextmanagerunloadkextwithidentif.md): Request the kernel to unload a kext with a given bundle identifier.
