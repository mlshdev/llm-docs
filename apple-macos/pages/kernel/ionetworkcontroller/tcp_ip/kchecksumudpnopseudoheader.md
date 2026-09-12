> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkcontroller/tcp_ip/kchecksumudpnopseudoheader](https://developer.apple.com/documentation/kernel/ionetworkcontroller/tcp_ip/kchecksumudpnopseudoheader)

# kChecksumUDPNoPseudoHeader

**Interface language:** Objective-C

**Framework:** Kernel

<a id="overview"></a>

## Overview

A UDP checksum that covers the UDP header and the UDP data, but the pseudo header is not included in the checksum computation. A partial 16-bit checksum value must be provided to allow the protocol stacks to calculate and verify the final checksum. This type of checksum is not currently supported on the output path.
