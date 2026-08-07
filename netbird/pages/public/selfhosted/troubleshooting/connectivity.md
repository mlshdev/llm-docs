> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/selfhosted/troubleshooting/connectivity.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/selfhosted/troubleshooting/connectivity.mdx)

# Connectivity issues

Peer connectivity and relay problems on a self-hosted deployment. For other areas, start from [Troubleshooting](https://docs.netbird.io/selfhosted/troubleshooting).

## Debugging TURN connections

When peers can't establish a direct connection, they fall back to the TURN (relay) server. If the connection still fails with relay, confirm your TURN configuration is correct and reachable.

To test it, open the [Trickle ICE test tool](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice). In the **ICE servers** box, remove the default server and add your TURN server. Replace netbird.DOMAIN.com and PASSWORD with your STUN/TURN details from your configuration (`config.yaml` for the combined setup, or the `TURNConfig` section in `management.json` for older multi-container setups), then click Add server.

![The Trickle ICE test tool with a NetBird STUN/TURN server added to the ICE servers list](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/selfhosted/troubleshooting/turn.png)

*Add your STUN/TURN server in the ICE servers box, then click Add server.*

Gather candidates and read the result:

![Trickle ICE test output listing host, srflx, and relay candidate types](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/selfhosted/troubleshooting/turn-test-out.png)

*A working TURN server returns `srflx` and `relay` candidates.*

The candidate types are `host` (local address), `srflx` (STUN reflexive address), and `relay` (TURN relay address). If `srflx` and `relay` are missing, the TURN server is not working or not reachable. Review the required ports in the [requirements section](https://docs.netbird.io/selfhosted/selfhosted-guide#requirements).

## Peers can't connect to each other

**Symptom**: Peers are registered and show in the dashboard, but can't establish a connection between them.

**Likely causes and fixes** (most common first):

1. **STUN/TURN is unreachable.** Confirm UDP/3478 (STUN/TURN) is open, then verify the relay path with the [TURN test above](#debugging-turn-connections).
2. **A host firewall is dropping traffic** on one or both peers. Check the local firewall rules on each peer.
3. **The peer itself is unhealthy.** Run `netbird status -d` on both peers and check the connection type and last handshake.

**Confirm**: `netbird status -d` on both peers shows `Status: Connected` and a recent WireGuard handshake.

## Management service unreachable

**Symptom**: Clients can't register or stay connected, reporting that the Management service is unreachable.

**Likely causes and fixes** (most common first):

1. **TCP/443 is blocked** between the client and the server. Confirm the port is open end to end.
2. **DNS doesn't resolve your domain** to the server's public IP. Check resolution from the client.
3. **Management is down or erroring.** Review `docker compose logs management`, and test the endpoint directly: `curl -v https://YOUR_DOMAIN/api/health`.

**Confirm**: `curl https://YOUR_DOMAIN/api/health` returns a healthy response, and `netbird status` shows `Management: Connected`.
