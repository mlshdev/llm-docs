> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkcontroller/tcp_ip/kchecksumtcpsum16](https://developer.apple.com/documentation/kernel/ionetworkcontroller/tcp_ip/kchecksumtcpsum16)

# kChecksumTCPSum16

**Interface language:** Objective-C

**Framework:** Kernel

<a id="overview"></a>

## Overview

The hardware has a simple checksum engine that can perform a TCP style ones complement sum of 16-bit words over a certain range of bytes in a packet. The hardware does not have the ability to scan for IP or TCP headers, and the driver must pass/get additional parameter(s) to or from the protocol stack to coordinate the checksumming effort.
