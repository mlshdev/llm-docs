> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobasicoutputqueue/serviceasync/kserviceasync

# kServiceAsync

**Interface language:** Objective-C

**Framework:** Kernel

<a id="overview"></a>

## Overview

Set this option to service the queue in an asynchronous manner. The service() call will not block, but a scheduling latency will be introduced before the queue is serviced.
